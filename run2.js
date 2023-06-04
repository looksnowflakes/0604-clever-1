#!/bin/sh
UUID=${UUID:-'165dfdae-ec83-44bc-ac80-01f338372bf7'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
