# Generated by Django 3.0.2 on 2020-01-16 08:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0003_auto_20200114_1008'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='price',
            new_name='buy_price',
        ),
        migrations.AddField(
            model_name='item',
            name='sell_price',
            field=models.IntegerField(default=0),
        ),
    ]
