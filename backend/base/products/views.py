from django.shortcuts import get_list_or_404
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
import django_filters
from .serializers import (
    CategorySerializer,
    ColorSerializer,
    SizeSerializer,
    ProductSerializer,
)
from .models import (
    Category,
    Color,
    Size,
    Product
)
from rest_framework import (
    generics, 
    status
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
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
        
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