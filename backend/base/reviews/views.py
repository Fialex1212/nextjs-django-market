from rest_framework import generics
from .serializers import (
    ReviewCreateUpdateSerializer,
    ReviewDetailListSerializer,
    ReviewDeteleSerializer,
    ReviewProductCreateUpdateSerializer,
    ReviewProductDetailListSerializer,
    ReviewProductDeteleSerializer,
)
from .models import ReviewProduct, Review


class ReviewListView(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewDetailListSerializer


class ReviewCreateView(generics.CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewCreateUpdateSerializer


class ReviewDeleteView(generics.DestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewDeteleSerializer
    lookup_field = "id"


class ReviewProductListView(generics.ListAPIView):
    queryset = ReviewProduct.objects.all()
    serializer_class = ReviewProductDetailListSerializer


class ReviewProductDetailView(generics.RetrieveAPIView):
    queryset = ReviewProduct.objects.all()
    serializer_class = ReviewProductDetailListSerializer
    lookup_field = "id"


class ReviewProductCreateView(generics.CreateAPIView):
    queryset = ReviewProduct.objects.all()
    serializer_class = ReviewProductCreateUpdateSerializer


class ReviewProductDeleteView(generics.DestroyAPIView):
    queryset = ReviewProduct.objects.all()
    serializer_class = ReviewProductDeteleSerializer
    lookup_field = "id"
