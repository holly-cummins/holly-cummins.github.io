---
title: Interacting with headless computers (or "How to not keep losing your raspberry pi on the network")
cover: complexity.png
author: holly cummins
category: iot
type: blog
---

I spend a fair amount of time playing with Raspberry Pis and other ARM-based boxes, like pcDuinos and Utilite. (If my boss is reading this, I'm not "playing", I'm "working".) I still find it amazing how small, cheap, and powerful these devices are.

One thing it's taken me a while to work out is how to connect to the computer. It's kind of a prerequisite for doing anything more interesting, like embedding it in a hat or a ball, or just ... using it. It should be so easy, right? A lot of set-up guides start with you plugging the processor to an HDMI monitor and USB keyboard. This isn't so practical if I'm out and about with the computer, because I'm not going to be lugging an HDMI monitor with me. Even at home, it's not foolproof - my new pcDuino doesn't seem able to display a picture over HDMI to any of the (six) monitors, TVs, or projectors I tried. At that point it's not so much "headless" as "decapitated".

Connecting by ssh requires less bulky hardware, but it has its own challenges: what on earth is the ip address of this thing? I used to ensure I always knew the ip address by nailing it down. I'd connect the pi to my laptop with an ethernet cable (no need for a fancy crossover one with a modern computer), configure the pi with a static ip address (for example, 192.168.2.10), and then configure my laptop's ethernet interface to think it was 192.168.2.1. This ensured I could easily connect to my pi, but it did require some initial set up of the network. For my totally inaccessible pcDuino, this is no good. Even for the pi, it's not ideal - the static ip address means then even if I plug it into my router, it's totally divorced from the "real" internet. More seriously, I've had a few panics where I've loaned the pi out and then found I was unable to connect to it when I got it back. (Curse you, nameless colleague who re-configured the pi to use dhcp and didn't tell me!) The static ip settings also left my laptop in a pretty messed up state.

I've now found a new system which avoids some of these disadvantages. I don't touch the ethernet configuration of the arm box, so it can stay using dhcp. I connect it to my laptop with an ethernet cable but I configure my mac to share its internet connection from wi-fi to ethernet. This OS magic enables the two computers to see each other without either having to have crazy network settings.

I then use nmap to find the pi on the network, as follows:`sudo nmap -sn 192.168.1.0/24`. To work out which ip address to scan, I run `ifconfig` and use the ethernet access of the `bridge100` network interface (but change the last digit to 0). The `sudo` isn't necessary, but it makes nmap show the MAC addresses.

This isn't so useful for the pcDuino, which doesn't have a fixed MAC address, but it really helps identify the pi, which will always have a MAC address in the b8:27:eb range.

_Edit - other options:_ I haven't tried these, but twitter has spoken! If you have a flock (or even a small handful) of identical devices, including [ipspeak](https://gist.github.com/andysc/5605183) in the bootable image bypasses the need for any mmap sleuthing. You can plug headphones into the device and it will read out its ip address every thirty seconds. Alternatively, if you have individually configured devices, [avahi](http://www.avahi.org/) allows them to be addressed using a memorable name.

## Acknowledgements

There are many similar guides on the internet. I've posted this here mostly in the hope it will be useful notes to my future self, since I've independently rediscovered my optimum flow about four times. I figured out the nmap commands from a relatively recent post at [stackoverflow](http://raspberrypi.stackexchange.com/questions/13936/find-raspberry-pi-address-on-local-network), and the idea of using network sharing to connect my pi to my laptop without wrecking my laptop's settings is from [alvin_jin](https://www.element14.com/community/thread/26532/l/quick-start-of-pcduino-without-a-hdmi-monitor-and-serial-debug-cable?displayFullThread=true).
