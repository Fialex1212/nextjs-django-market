from rest_framework import serializers
from .models import Review, ReviewProduct
from users.serializers import UserSerializers

class ReviewDetailListSerializer(serializers.ModelSerializer):
    user = UserSerializers()
    
    class Meta:
        model = Review
        fields = ["id", "user", "rating", "text"]
        
    def get_user(self, obj):
        return {
            "id": str(obj.user.id),
            "username": obj.user.username,
            "email": obj.user.email
        }

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
        fields = ["id", "good", "user", "rating", "text", "created_at"]

class ReviewProductCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewProduct
        fields = ["rating", "text"]
        
class ReviewProductDeteleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewProduct
        fields = ["id"]