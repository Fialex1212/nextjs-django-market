from django.db import models
from users.models import CustomUser
from products.models import Product
import uuid
from django.core.validators import MaxValueValidator, MinValueValidator

class ReviewProduct(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    good = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    rating = models.IntegerField(default=5, validators=[
        MaxValueValidator(5),
        MinValueValidator(1)
    ])
    text = models.TextField()
    
    def __str__(self):
        return f"{self.user}, {self.good}, {self.rating}"

class Review(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    rating = models.IntegerField(default=5, validators=[
        MaxValueValidator(5),
        MinValueValidator(1)
    ])
    text = models.TextField()