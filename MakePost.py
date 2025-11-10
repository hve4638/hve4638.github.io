#!/usr/bin/env python3
import sys
import datetime

def create_markdown_file(filename):
    now = datetime.datetime.now()
    date_format = '%Y-%m-%d %H:%M:%S'
    date_str = now.strftime(date_format)

    filedate = now.strftime('%Y-%m-%d')

    fullpath = f'_posts/{filedate}-{filename}.md'
    with open(fullpath, 'w', encoding='utf-8') as f:
        f.write(f'''---
title: 
author: Hve
slug: {filename}
date: {date_str} +0900
categories: []
math: false
mermaid: false
tags: []
---
''')
    print(f'create file : ./{fullpath}')

if __name__ == '__main__':

    filename:str = ''
    try:
        if (len(sys.argv) < 2):
            filename = input('FILENAME (without Date) : ')
        else:
            filename = sys.argv[1]
    except KeyboardInterrupt:
        print("")
        exit()

    create_markdown_file(filename)