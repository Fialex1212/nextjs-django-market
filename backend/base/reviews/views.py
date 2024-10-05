from rest_framework import generics
from .serializers import (
    ReviewCreateUpdateSerializer,
    ReviewDetailListSerializer,
    ReviewDeteleSerializer,
    ReviewProductCreateUpdateSerializer,
    ReviewProductDetailListSerializer,
    ReviewProductDeteleSerializer
)
from .models import ReviewProduct, Review


#Review List
class ReviewListView(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewDetailListSerializer

#Review Detail
class ReviewDetailView(generics.RetrieveAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewDetailListSerializer
    lookup_field = 'id'
    
#Review Add
class ReviewCreateView(generics.CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewCreateUpdateSerializer

#Review Update
class ReviewUpdateView(generics.UpdateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewCreateUpdateSerializer
    lookup_field = 'id'
    
#Review Delete
class ReviewDeleteView(generics.DestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewDeteleSerializer
    lookup_field = 'id'
    
#Review Product List
class ReviewProductListView(generics.ListAPIView):
    queryset = ReviewProduct.objects.all()
    serializer_class = ReviewProductDetailListSerializer

#Review Product Detail
class ReviewProductDetailView(generics.RetrieveAPIView):
    queryset = ReviewProduct.objects.all()
    serializer_class = ReviewProductDetailListSerializer
    lookup_field = 'id'
    
#Review Product Add
class ReviewProductCreateView(generics.CreateAPIView):
    queryset = ReviewProduct.objects.all()
    serializer_class = ReviewProductCreateUpdateSerializer

#Review Product Update
class ReviewProductUpdateView(generics.UpdateAPIView):
    queryset = ReviewProduct.objects.all()
    serializer_class = ReviewProductCreateUpdateSerializer
    lookup_field = 'id'
    
#Review Product Delete
class ReviewProductDeleteView(generics.DestroyAPIView):
    queryset = ReviewProduct.objects.all()
    serializer_class = ReviewProductDeteleSerializer
    lookup_field = 'id'