from rest_framework import serializers
from .models import FitnessRecord

class FitnessRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = FitnessRecord
        fields = '__all__'