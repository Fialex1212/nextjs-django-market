from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CategoryListCreateView, 
    CategoryDetailView,
    ColorListCreateView,
    ColorDetailView,
    SizeListCreateView,
    SizeDetailView,
    ProductViewSet
)

# Set up router for Product viewset
router = DefaultRouter()
router.register(r'products', ProductViewSet)

urlpatterns = [
    #Categories urls
    path("categories/", CategoryListCreateView.as_view(), name="category-list"),
    path("categories/<uuid:id>/", CategoryDetailView.as_view(), name="category-detail"),
    
    #Colors urls
    path('colors/', ColorListCreateView.as_view(), name='color-list-create'),
    path('colors/<uuid:id>/', ColorDetailView.as_view(), name='color-detail'),
    
    #Sizes urls
    path('sizes/', SizeListCreateView.as_view(), name='size-list-create'),
    path('sizes/<uuid:id>/', SizeDetailView.as_view(), name='size-detail'),
    
    #Products urs
    path('', include(router.urls)),
]
