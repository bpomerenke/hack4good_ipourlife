# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-11-05 04:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_resource'),
    ]

    operations = [
        migrations.AddField(
            model_name='resource',
            name='email',
            field=models.CharField(max_length=256, null=True),
        ),
        migrations.AddField(
            model_name='resource',
            name='phone',
            field=models.CharField(max_length=256, null=True),
        ),
    ]
