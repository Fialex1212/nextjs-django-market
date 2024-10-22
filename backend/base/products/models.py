import uuid
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    
    def __str__(self):
        return f"{self.name}"

class Size(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    
    def __str__(self):
        return f"{self.name}"

class Color(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    
    def __str__(self):
        return f"{self.name}"

class Product(models.Model):
    STATUS_CHOICES = [
        ('in_stock', 'In Stock'),
        ('on_the_road', 'On the Road'),
        ('not_available', 'Not Available'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=124)
    image = models.ImageField(upload_to="uploads/products/", max_length=255, blank=True, null=True)
    rating = models.IntegerField(
        validators=[
            MinValueValidator(0.0),
            MaxValueValidator(5.0)
        ],
        default=5
    )
    price = models.IntegerField()
    discount = models.IntegerField()
    description = models.TextField()
    colors = models.ManyToManyField(Color)
    size = models.ManyToManyField(Size)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    type_of_clothes = models.TextField(default="Unknown")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    availability_status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='in_stock',
    )
    
    def __str__(self) -> str:
        return f"{self.title}"