from django.db import models
from users.models import CustomUser
import uuid

class Good(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=124)
    price = models.IntegerField()
    discount = ""
    description = models.TextField()
    colors = ""
    sizes = ""
    

class Review(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    good = models.ForeignKey(Good, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    starts = models.IntegerField()
    text = models.TextField()

class GoodReview(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    starts = models.IntegerField()
    text = models.TextField()

class Cart(models.Model):
    pass
