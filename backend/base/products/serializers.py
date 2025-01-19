from rest_framework import serializers
from .models import PromoCode, Category, Size, Color, Product, Image


class PromoCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PromoCode
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ["id", "name"]


class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ["id", "name"]


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ["image"]


class ProductSerializer(serializers.ModelSerializer):
    colors = serializers.PrimaryKeyRelatedField(queryset=Color.objects.all(), many=True)
    sizes = serializers.PrimaryKeyRelatedField(queryset=Size.objects.all(), many=True)
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    # images = serializers.PrimaryKeyRelatedField(queryset=Image.objects.all(), many=True)

    class Meta:
        model = Product
        fields = [
            "id",
            "title",
            "image",
            "price",
            "rating",
            "availability_status",
            "discount",
            "description",
            "colors",
            "sizes",
            "category",
            "sex",
            "created_at",
            "updated_at",
            "materials",
        ]
        #'images',

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation["colors"] = [color.name for color in instance.colors.all()]
        representation["sizes"] = [size.name for size in instance.sizes.all()]
        # representation['images'] = [image.image for image in instance.images.all()]
        representation["category"] = instance.category.name
        return representation
