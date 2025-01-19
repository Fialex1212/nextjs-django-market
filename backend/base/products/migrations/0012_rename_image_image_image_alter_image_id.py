# Generated by Django 5.1 on 2025-01-17 17:06

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0011_image_product_images'),
    ]

    operations = [
        migrations.RenameField(
            model_name='image',
            old_name='Image',
            new_name='image',
        ),
        migrations.AlterField(
            model_name='image',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
