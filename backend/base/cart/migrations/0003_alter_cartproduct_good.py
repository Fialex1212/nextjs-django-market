# Generated by Django 5.1.1 on 2024-10-22 12:46

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0002_initial'),
        ('products', '0003_remove_product_new_price_product_availability_status_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartproduct',
            name='good',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cart_items', to='products.product'),
        ),
    ]
