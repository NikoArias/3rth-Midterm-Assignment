# Generated by Django 3.2.8 on 2021-10-20 19:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_instrument_instrument_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='instrument',
            name='price',
            field=models.FloatField(),
        ),
    ]