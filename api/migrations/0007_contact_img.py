# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-11-05 05:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20171104_1751'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='img',
            field=models.CharField(default='', max_length=4000),
        ),
    ]
