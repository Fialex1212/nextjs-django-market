from rest_framework import generics
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
import django_filters
from .serializers import (
    CategorySerializer,
    ColorSerializer,
    SizeSerializer,
    ProductSerializer
)
from .models import (
    Category,
    Color,
    Size,
    Product
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

# Define filter class for Product model
class ProductFilter(django_filters.FilterSet):
    # Filtering by related fields like `category`, `colors`, and `size`
    category = django_filters.CharFilter(field_name="category__name", lookup_expr="icontains")
    colors = django_filters.CharFilter(field_name="colors__name", lookup_expr="icontains")
    size = django_filters.CharFilter(field_name="size__name", lookup_expr="icontains")
    
    # Price filtering
    min_price = django_filters.NumberFilter(field_name="price", lookup_expr='gte')
    max_price = django_filters.NumberFilter(field_name="price", lookup_expr='lte')

    class Meta:
        model = Product
        fields = ['category', 'colors', 'size', 'min_price', 'max_price']

# Product viewset
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    # Adding filtering and sorting capabilities
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = ProductFilter
    filterset_fields = ['category', 'colors', 'size', 'price']
    ordering_fields = ['price', 'new_price', 'title']
    ordering = ['price']