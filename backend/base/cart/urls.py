from django.urls import path
from .views import (
    CartDetailView, 
    CartListCreateView,
    CartItemDetailView,
    CartItemListCreateView
)

urlpatterns = [
    #Carts
    path("carts/", CartListCreateView.as_view(), name="cart-crate-list"),
    path("carts/<uuid:id>/", CartDetailView.as_view(), name="cart-detail"),
    
    #Carts items
    path("carts/items/", CartListCreateView.as_view(), name="cart-crate-list"),
    path("carts/items/<uuid:id>/", CartDetailView.as_view(), name="cart-detail"),
    
]