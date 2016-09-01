var panel = new Panel
var panelScreen = panel.screen
var freeEdges = {"bottom": true, "top": true, "left": true, "right": true}

for (i = 0; i < panelIds.length; ++i) {
    var tmpPanel = panelById(panelIds[i])
    if (tmpPanel.screen == panelScreen) {
        // Ignore the new panel
        if (tmpPanel.id != panel.id) {
            freeEdges[tmpPanel.location] = false;
        }
    }
}

if (freeEdges["bottom"] == true) {
    panel.location = "bottom";
} else if (freeEdges["top"] == true) {
    panel.location = "top";
} else if (freeEdges["left"] == true) {
    panel.location = "left";
} else if (freeEdges["right"] == true) {
    panel.location = "right";
} else {
    // There is no free edge, so leave the default value
    panel.location = "top";
}

//panel.height = screenGeometry(panel.screen).height > 1024 ? 35 : 27
panel.formfactor = 2
panel.height = 56

var kicker = panel.addWidget("org.kde.plasma.kickerdash")
kicker.currentConfigGroup = ["Shortcuts"]
kicker.writeConfig("global", "Alt+F1")

kicker.currentConfigGroup = ["General"]
kicker.writeConfig("customButtonImage", "file:///usr/share/icons/hicolor/scalable/apps/homerun.svg")
kicker.writeConfig("favoriteApps", ["systemsettings.desktop","synaptic.desktop","org.kde.ksysguard.desktop","vokoscreen.desktop"])
kicker.writeConfig("limitDepth", true)
kicker.writeConfig("useCustomButtonImage", true)

var eitm = panel.addWidget("org.kde.plasma.icontasks")
eitm.currentConfigGroup = ["Configuration", "General"]
eitm.writeConfig("launchers" ,["file:///usr/share/applications/org.kde.dolphin.desktop","file:///usr/share/applications/firefox.desktop"])
eitm.writeConfig("showOnlyCurrentDesktop", true)
eitm.writeConfig("separateLaunchers", false)
eitm.writeConfig("groupPopups", false)
eitm.writeConfig("sortingStrategy", 1)
eitm.writeConfig("experimentalQmlTextLabel", true)

var yakuakeIcon = panel.addWidget("org.kde.plasma.icon")
yakuakeIcon.currentConfigGroup = ["General"]
yakuakeIcon.writeConfig("applicationName", "Yakuake")
yakuakeIcon.writeConfig("genericName", "Drop-down Terminal")
yakuakeIcon.writeConfig("iconName", "yakuake")
yakuakeIcon.writeConfig("url", "/usr/share/applications/org.kde.yakuake.desktop")

var pvolumemixer = panel.addWidget("org.kde.plasma.volume")

var systray = panel.addWidget("org.kde.plasma.systemtray")
var systrayContainmentId = systray.readConfig("SystrayContainmentId")
var systrayContainment = desktopById(systrayContainmentId)
systrayContainment.currentConfigGroup = ["General"]
systrayContainment.writeConfig("extraItems","org.kde.plasma.devicenotifier,org.kde.plasma.battery,org.kde.plasma.networkmanagement,org.kde.plasma.clipboard,org.kde.plasma.printmanager,org.kde.ktp-contactlist,org.kde.plasma.ktplegacypresenceapplet")
systrayContainment.writeConfig("hiddenItems","KMix,org.kde.ktp-contactlist,org.kde.plasma.ktplegacypresenceapplet,org.kde.plasma.volume,org.kde.plasma.notifications,org.kde.plasma.clipboard")
systrayContainment.writeConfig("knownItems","org.kde.discovernotifier,org.kde.plasma.volume,org.kde.plasma.notifications")
systrayContainment.writeConfig("shownItems", "transmission")

panel.addWidget("org.kde.plasma.digitalclock")
panel.addWidget("org.kde.plasma.notifications")


