from rest_framework import serializers
from .models import Cart, CartProduct


class CartItemSerializers(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ["good", "quantity"]


class CartSerializers(serializers.ModelSerializer):
    items = CartItemSerializers(many=True, read_only=True)
    total_price = serializers.SerializerMethodField()
    total_items = serializers.SerializerMethodField()

    class Meta:
        model = CartProduct
        fields = ["good", "quantity", "items", "total_price", "total_items"]

    def get_total_items(self, obj):
        return obj.total_items()

    def get_total_price(self, obj):
        return obj.total_price()
