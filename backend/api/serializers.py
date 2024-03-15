from rest_framework import serializers

from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        # Initializing user object
        user = User(email=validated_data['email'], username=validated_data['username'])

        # Hashing the password
        user.set_password(validated_data['password'])

        # Saving data in database
        user.save()
        return user
