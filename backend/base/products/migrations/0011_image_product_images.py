# Generated by Django 5.1 on 2025-01-17 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0010_product_brand'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Image', models.ImageField(upload_to='uploads/products/')),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='images',
            field=models.ManyToManyField(blank=True, related_name='products', to='products.image'),
        ),
    ]
