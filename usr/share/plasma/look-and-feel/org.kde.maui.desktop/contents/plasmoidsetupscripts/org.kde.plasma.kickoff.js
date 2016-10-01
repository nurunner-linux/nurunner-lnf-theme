applet.currentConfigGroup = ["Shortcuts"]
applet.writeConfig("global", "Alt+F1")

applet.currentConfigGroup = ["General"]
applet.writeConfig("icon", "/usr/share/pixmaps/homerun.svg")
applet.writeConfig("favorites", ["systemsettings.desktop","synaptic.desktop","org.kde.ksysguard.desktop"])

applet.reloadConfig();
