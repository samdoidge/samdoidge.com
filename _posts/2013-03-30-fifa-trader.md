---
layout: post
title: Fifa Trader
tags: [tech, other]
---

Fifa Trader connects to Fifa 13′s unpublished API to allow automated bidding and selling of Ultimate Team cards. Connection to FIFA servers possible from work done by numerous others on GitGub, my GitHub fork contains a current working app for ps3 accounts: [https://github.com/samdoidge/FIFA13-Ultimate-Team-Search](https://github.com/samdoidge/FIFA13-Ultimate-Team-Search).


Search screen once logged in. Twitter Bootstrap is used for the UI, third party graphics used to present data in a nice way:
![Fifatrader](/assets/fifatrader.png)


![Fifatrader Buy](/assets/fifatrader-buy.png)
Adding to a buy list will cause a CRON script to be ran several times a minute searching for target cards. Once a bid has been place it will keep checking bidding if that card is still the lowest priced available within a few minutes left of the auction.

![Fifatrader Dashboard](/assets/fifatrader-dashboard.png)
Lists current and recent transactions.

I have had several hundred registrations, all stumbling upon the site with no marketing - [Fifa Trader](http://fifatrader.com)
