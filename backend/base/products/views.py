from django.utils import timezone
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from .serializers import (
    PromoCodeSerializer,
    CategorySerializer,
    ColorSerializer,
    SizeSerializer,
    ProductSerializer,
)
from .models import (
    PromoCode,
    Category,
    Color,
    Size,
    Product
)
from rest_framework import (
    generics, 
    status
)
from django.shortcuts import (
    get_list_or_404, 
    get_object_or_404
)

#Views for category
class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = "id"
    
    
# Views for Color
class ColorListCreateView(generics.ListCreateAPIView):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer

class ColorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer
    lookup_field = "id"


# Views for Size
class SizeListCreateView(generics.ListCreateAPIView):
    queryset = Size.objects.all()
    serializer_class = SizeSerializer

class SizeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Size.objects.all()
    serializer_class = SizeSerializer
    lookup_field = "id"

# View for Products
class ProductsListCreateView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        queryset = Product.objects.all()
        
        start = self.request.query_params.get('start', 0)
        end = self.request.query_params.get('end')
        
        try:
            start = int(start)
            end = int(end) if end is not None else start + 9
        except ValueError:
            start = 0
            end = 9
            
        return queryset[start:end + 1]
    
    def list_of_products(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
        
class ProductDetailView(APIView):
    def get(self, request, category, sex, id):
        products = get_list_or_404(Product, category__name=category, sex=sex, id=id)
        return Response(self.get_product_details(products), status=status.HTTP_200_OK)

    def get_product_details(self, products):
        return [
            {
                "id": str(product.id),
                "title": product.title,
                "image": product.image.url if product.image else None,
                "rating": product.rating,
                "price": product.price,
                "discount": product.discount,
                "description": product.description,
                "colors": [color.name for color in product.colors.all()],
                "sizes": [size.name for size in product.sizes.all()],
                "category": product.category.name,
                "type_of_clothes": product.type_of_clothes,
                "created_at": product.created_at.isoformat(),
                "updated_at": product.updated_at.isoformat(),
                "availability_status": product.availability_status,
                "sex": product.sex
            }
            for product in products
        ]
        
class ProductsPagination(PageNumberPagination):
    page_size = 10 

class ProductsSearchView(APIView):
    def get(self, request):
        query = request.GET.get('query', '').strip()
        if query:
            results = Product.objects.filter(title__icontains=query)
            paginator = ProductsPagination()
            paginated_results = paginator.paginate_queryset(results, request)
            serializer = ProductSerializer(paginated_results, many=True)
            return paginator.get_paginated_response(serializer.data)
        
        return Response({"message": "No query provided or no results found"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def apply_promo_code(req):
    code = req.POST.get('promo_code')
    promo = get_object_or_404(PromoCode, code=code, is_active=True)
    print(code)
    
    try:   
        if promo.start_date <= timezone.now() <= promo.end_date:
            if promo.usage_limit > promo.times_used:
                promo.times_used += 1
                promo.save()
                return Response({'success': True, 'discount': promo.discount_value}, status=status.HTTP_200_OK)
            else:
                return Response({'success': False, 'message': 'Promo code has reached its usage limit.'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'success': False, 'message': 'promo code is not valid'}, status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response({'message': "Not fount"})
    
@api_view(['GET'])
def list_promo_code(req):
    promo_codes = PromoCode.objects.all()
    
    serializer = PromoCodeSerializer(promo_codes, many=True)
    return Response({"promo codes": serializer.data})