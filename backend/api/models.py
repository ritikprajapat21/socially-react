from django.db import models

from django.contrib.auth.models import AbstractUser

from .managers import UserManager

class User(AbstractUser):
    username = models.CharField(max_length=255, blank=False, null=False, unique=True)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return self.email
