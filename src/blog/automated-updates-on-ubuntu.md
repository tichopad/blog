---
title: Automatic updates on Linux (Ubuntu and Debian)
author: Michael Tichopad
description: "How to easily setup automated APT updates on Ubuntu and Debian."
pubDate: 2025-11-17
tags: ["ubuntu", "debian", "linux"]
---

> See [AutomaticSecurityUpdates - Community Help Wiki (ubuntu.com)](https://help.ubuntu.com/community/AutomaticSecurityUpdates)

# Using the "unattended-upgrades" package

Install the `unattended-upgrades` package if it isn't already installed (`sudo apt-get install unattended-upgrades`).

To enable it, do:

`sudo dpkg-reconfigure --priority=low unattended-upgrades`

(it's an interactive dialog) which will create `/etc/apt/apt.conf.d/20auto-upgrades` with the following contents:

```
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
```

Details about what these values mean may be found in the header of the **/etc/cron.daily/apt** file. Note:

- When the apt job starts, it will sleep for a random period between 0 and `APT::Periodic::RandomSleep` seconds. The default value is "1800" so that the script will stall for up to 30 minutes (1800 seconds) so that the mirror servers are not crushed by everyone running their updates all at the same time. Only set this to 0 if you use a local mirror and don't mind the load spikes. Note that while the apt job is sleeping it will cause the execution of the rest of your cron.daily jobs to be delayed.
- If you want the script to generate more verbose output set `APT::Periodic::Verbose "1";`
- If you want the script to automatically reboot when needed, you not only need to set `Unattended-Upgrade::Automatic-Reboot "true"`, but you also need to have the `update-notifier-common` package installed. On minimal installations this is not installed by default and without it the automatic updater will never reboot and will not even tell you that you need to reboot manually if you have email notifications configured!

And `/etc/apt/apt.conf.d/50unattended-upgrades`:

```
// Automatically upgrade packages from these (origin, archive) pairs
Unattended-Upgrade::Allowed-Origins {
    // ${distro_id} and ${distro_codename} will be automatically expanded
    "${distro_id} stable";
    "${distro_id} ${distro_codename}-security";
    "${distro_id} ${distro_codename}-updates";
//  "${distro_id} ${distro_codename}-proposed-updates";
};
// List of packages to not update
Unattended-Upgrade::Package-Blacklist {
//  "vim";
//  "libc6";
//  "libc6-dev";
//  "libc6-i686";
};
// Send email to this address for problems or packages upgrades
// If empty or unset then no email is sent, make sure that you
// have a working mail setup on your system. The package 'mailx'
// must be installed or anything that provides /usr/bin/mail.
//Unattended-Upgrade::Mail "root@localhost";
// Do automatic removal of new unused dependencies after the upgrade
// (equivalent to apt-get autoremove)
//Unattended-Upgrade::Remove-Unused-Dependencies "false";
// Automatically reboot *WITHOUT CONFIRMATION* if a
// the file /var/run/reboot-required is found after the upgrade
//Unattended-Upgrade::Automatic-Reboot "false";
```

## Determining the current configuration

The current configuration can be queried by running:

`apt-config dump APT::Periodic::Unattended-Upgrade`

Which will produce output like:

`APT::Periodic::Unattended-Upgrade "1";`

In this example, Unattended Upgrade will run every 1 day. If the number is "0" then unattended upgrades are disabled.

The files in `/etc/apt/apt.conf.d/` are evaluated in lexicographical order with each file capable of overriding values set in earlier files. This makes it insufficient to view the setting in `/etc/apt/apt.conf.d/20auto-upgrades` and why it is recommended to use apt-config.
