# from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
# from django.db import models
#
#
# class UserManager(BaseUserManager):
#     """
#     Django requires that custom users define their own Manager class. By
#     inheriting from `BaseUserManager`, we get a lot of the same code used by
#     Django to create a `User` for free.
#
#     All we have to do is override the `create_user` function which we will use
#     to create `User` objects.
#     """
#
#     def create_user(self, username, email, password=None):
#         """Create and return a `User` with an email, username and password."""
#         if username is None:
#             raise TypeError('Users must have a username.')
#
#         if email is None:
#             raise TypeError('Users must have an email address.')
#
#         user = self.model(username=username, email=self.normalize_email(email))
#         user.set_password(password)
#         user.save()
#
#         return user
#
#     def create_superuser(self, username, email, password):
#         """
#       Create and return a `User` with superuser powers.
#
#       Superuser powers means that this use is an admin that can do anything
#       they want.
#       """
#         if password is None:
#             raise TypeError('Superusers must have a password.')
#
#         user = self.create_user(username, email, password)
#         user.is_superuser = True
#         user.is_staff = True
#         user.save()
#
#         return user
#
#
# class User(AbstractBaseUser):
#     username = None
#     email = models.EmailField('email address', unique=True)
#     name = models.CharField(max_length=100)
#
#     objects = UserManager()
#
#     USERNAME_FIELD = 'name'
#
#     def __str__(self):  # __unicode__ on Python 2
#         return self.name
#
#
# class Profile(models.Model):
#
#     user = models.OneToOneField(
#         User, on_delete=models.CASCADE
#     )
#
#     bio = models.TextField(max_length=500, blank=True)
#
#     favorites = models.ManyToManyField(
#         'market.Item',
#         related_name='favorited_by'
#     )
#
#     def favorite(self, item):
#         self.favorites.add(item)
#
#     def unfavorite(self, item):
#         self.favorites.remove(item)
#
#     class Meta:
#         abstract = True
