from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CategoryListCreateView, 
    CategoryDetailView,
    ColorListCreateView,
    ColorDetailView,
    SizeListCreateView,
    SizeDetailView,
    ProductsListCreateView,
    ProductDetailView
)

urlpatterns = [
    #Categories urls
    path("categories/", CategoryListCreateView.as_view(), name="category-list"),
    path("categories/<uuid:id>/", CategoryDetailView.as_view(), name="category-detail"),
    
    #Colors urls
    path('colors/', ColorListCreateView.as_view(), name='color-lis'),
    path('colors/<uuid:id>/', ColorDetailView.as_view(), name='color-detail'),
    
    #Sizes urls
    path('sizes/', SizeListCreateView.as_view(), name='size-list'),
    path('sizes/<uuid:id>/', SizeDetailView.as_view(), name='size-detail'),
    
    #Product urls
    path('products/', ProductsListCreateView.as_view(), name="products-list"),
    path('<str:category>/<str:sex>/<uuid:id>/', ProductDetailView.as_view(), name="product-detail")
]
