from django.db import models
from users.models import CustomUser
from products.models import Product
import uuid

class Cart(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='cart')
    
    def total_items(self):
        return sum(item.quantity for item in self.items.all())
    
    def total_price(self):
        return sum(item.good.price * item.quantity for item in self.items.all())
        
    def __str__(self):
        return f"Cart of {self.user.username}"
    
class CartProduct(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items')
    good = models.ForeignKey(Product, on_delete=models.CASCADE,  related_name='cart_items')
    created_at = models.DateTimeField(auto_now_add=True)
    quantity = models.PositiveIntegerField(default=1)