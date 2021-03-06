# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-11-04 20:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_accounttoken'),
    ]

    operations = [
        migrations.AddField(
            model_name='accounttoken',
            name='used',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='person',
            name='phone_number',
            field=models.CharField(max_length=64, null=True),
        ),
    ]
