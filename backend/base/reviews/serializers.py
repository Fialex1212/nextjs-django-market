from rest_framework import serializers
from .models import Review, ReviewProduct

class ReviewDetailListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["id", "user", "rating", "text"]

class ReviewCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["rating", "text"]
        
class ReviewDeteleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["id"]
        
class ReviewProductDetailListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewProduct
        fields = ["id", "good", "user", "rating", "text"]

class ReviewProductCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewProduct
        fields = ["rating", "text"]
        
class ReviewProductDeteleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewProduct
        fields = ["id"]