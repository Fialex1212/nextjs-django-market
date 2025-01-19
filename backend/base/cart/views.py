from rest_framework import generics
from .models import Cart, CartProduct
from .serializers import CartSerializers, CartItemSerializers


class CartListCreateView(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializers


class CartDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializers
    lookup_field = "id"


class CartItemListCreateView(generics.ListCreateAPIView):
    queryset = CartProduct.objects.all()
    serializer_class = CartItemSerializers


class CartItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CartProduct.objects.all()
    serializer_class = CartItemSerializers
    lookup_field = "id"
