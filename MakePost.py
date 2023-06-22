import sys
import datetime

def create_markdown_file(filename):
    now = datetime.datetime.now()
    date_format = '%Y-%m-%d %H:%M:%S'
    date_str = now.strftime(date_format)

    filedate = now.strftime('%Y-%m-%d')

    file_name = f'_posts/{filedate}-{filename}.md'
    with open(file_name, 'w', encoding='utf-8') as f:
        f.write(f'''---
title: 
author: Hve
date: {date_str} +0900
categories: []
math: false
mermaid: false
tags: []
---
''')

filename:str = ""
if (len(sys.argv) < 2):
    filename = input("FILENAME (without Date) : ")
else:
    filename = sys.argv[1]

create_markdown_file(filename)