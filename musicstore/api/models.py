from django.db import models




class Instrument(models.Model):
    name = models.TextField()
    price = models.FloatField()
    model = models.TextField()
    brand = models.TextField()
