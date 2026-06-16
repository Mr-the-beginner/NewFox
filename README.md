# <img src="./README-Resources//firefox-logo.svg" width="32" height="32" style="vertical-align: middle;"> NewFox [Animated]
A minimal Firefox theme with userContent and userChrome.

<div>
 <a href='https://www.mozilla.org'><img src="https://img.shields.io/badge/Last%20tested%20Firefox-v152.0.0-orange?logo=firefox"></a>
 <a href='https://github.com/Mr-the-beginner/NewFox/commits/main/'><img src="https://img.shields.io/github/last-commit/Mr-the-beginner/NewFox/main"></a>
</div>

<br>

🦊 I have Blurred my Pins, Weather, extensions and the searchbar in the Screenshot, it has nothing to do with the code.

##

![Image](./README-Resources/ShowCase2.png)

##

> [!CAUTION] 
> On Firefox 152.0.0 in the search bar type about:config and make this "browser.nova.enabled" false

>[!TIP]
> - Check out the [main features](showcase.md)
>
> - Use vertical tabs (Available from Firefox 136.0.0 above)

##

<details><summary>How to Install</summary>

## Step 1 - Download files

 - [Download](https://github.com/Mr-the-beginner/NewFox/releases/download/1.2.1/NewFox-V1.2.1.zip) and unzip theme files

## Step 2 - Enabling some settigs

 - In the search bar type about:config and make these true =
 - privacy.userContext.enabled
 - toolkit.legacyUserProfileCustomizations.stylesheets

## Step 3 - Installing the files

### Linux 
 - Type = about:support in the search bar.
 - Under "Application Basics", find "Profile Directory" and click "Open Directory" in front of it.
 - Copy the content of the "NewFox/profile/" directory as is inside and hit replace everything if necessarily.
 - Go back to about:support and now under "Application Basics", find "Application Binary" go to that place.
 - Copy the "NewFox/defaults" folder as is inside and hit replace everything if necessarily.

### Windows
 - Type = about:support in the search bar.
 - Under "Application Basics", find "Profile Folder" and click "Open Folder" in front of it.
 - Copy the content of the "NewFox/profile/" folder as is inside and hit replace everything if necessarily.
 - Copy the "NewFox/defaults" folder as is into Firefox main folder (where the Firefox executable is) and hit replace everything if necessarily.

### MacOS
 - Type = about:support in the search bar.
 - Under "Application Basics", find "Profile Directory" and click "Open Directory" in front of it.
 - Copy the content of the "NewFox/profile/" folder as is inside and hit replace everything if necessarily.
 - Copy the "NewFox/defaults" folder as is inside the main executable at "/Applications/Firefox.app/Contents/Resources/" and hit replace everything if necessarily.

## step 4 - Last touch

### Linux/macOS
- Type about:profiles
- Find your profile (or every profile) find "Local Directory" and click "Open Directory" close Firefox and delete all files in "startupCache" Directory.
### Windows
- Type about:profiles
- Find your profile (or every profile) find "Local Folder" and click "Open Folder" close Firefox and delete all files in "startupCache" folder.

</details>


##

<details><summary>Release notes</summary>

1.2.0:
- Homescreen pins are now inspired by liquid glass
- Fixed some svg´s
- Added the toolbar animated items

1.1.0:
- Added the running Knight 
- Added userChrome.js to apply javascript
- Disabled some shortcuts that broke my layout (yeah instead of fixing the code i removed the firefox UI elements, call it a skill issue if you want 😇)

1.0.0:
- Based Theme

</details>

##

> [!CAUTION] 
> At first the vertical tab will look odd there are 2 solutions
>
> 1st =>
> Before installing the files, make vertical tabs as small as possible, by dragging the splitter between the vertical tabs and the main screen to left.
>
> 2nd =>
> If you already installed the files, dragg the splitter between the vertical tabs and the main screen to left and right until the running night goes above seperator that should be under it.

> [!NOTE]
> Disable "personalize-button.css" in the configs (just delete the file).
> 
> The pencil icon will get shown up in the home screen right corner.
>
> Toggled-on the weather widget then enable the file again (restore the file).
>
> The running knight is also only get shown in the currect position if the firefox is maximized and have the fullscreen, if not it will be displaced (i will fix it someday 😇)

> [!TIP]
> Now available at ([https://firefoxcss-store.github.io/](https://firefoxcss-store.github.io/themes/newfox/))

##

> I also used some code and assets that doesn't belong to me, expand the list below to see the direct link to there original owners.

<details>  
<summary>✨ <b>Sources</b> <i>[Click to expand]</i> 👇</summary>

* 0.png, 1.png and 2.png are from this theme = https://addons.mozilla.org/en-US/firefox/addon/praisethesun/

* Icons folder, navbar.css and general.css are from = https://github.com/bmFtZQ/edge-frfox

*  Night-Swamp.jpg is the Adobe Premiere pro's 2023 splash screen = https://www.behance.net/gallery/163378813/Adobe-Premiere-Pro-Splash-Screen-2023/modules/921508831

*  The js loader is from = https://github.com/Aris-t2/CustomJSforFx

*  the 4.png is from = https://aamatniekss.itch.io/fantasy-knight-free-pixelart-animated-character

* liquid-glass inpired by = https://freefrontend.com/css-liquid-glass/

* Coin.png and Chest.png are from = https://itch.io

</details>

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Mr-the-beginner/NewFox&type=date&legend=top-left)](https://www.star-history.com/#Mr-the-beginner/NewFox&type=date&legend=top-left)

Highest so far = 105
