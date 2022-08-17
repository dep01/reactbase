const fs = require('fs');
var rimraf = require('rimraf');

async function write_file(dir, name, strFile, ext, message) {
  fs.access(dir, function (error) {
    if (error) {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, 0744);
      fs.access(`${dir}/${name}.${ext}`, function (error) {
        if (error) {
          fs.writeFile(`${dir}/${name}.${ext}`, strFile, function (error) {
            if (error) {
              console.log(error.message);
            } else {
              console.log(message);
            }
          });
        } else {
          console.log(
            'file name is exists, change the file name to another one',
          );
        }
      });
    } else {
      fs.access(`${dir}/${name}.${ext}`, function (error) {
        if (error) {
          fs.writeFile(`${dir}/${name}.${ext}`, strFile, function (error) {
            if (error) {
              console.log(error.message);
            } else {
              console.log(message);
            }
          });
        } else {
          console.log(
            'file name is exists, change the file name to another one',
          );
        }
      });
    }
  });
  return true;
}
async function delete_file() {
  fs.unlinkSync('app.json', (err) => {
    if (err) {
      console.log(err.message);
    }
  });
  fs.unlinkSync('android/app/src/main/AndroidManifest.xml', (err) => {
    if (err) {
      console.log(err.message);
    }
  });
  fs.unlinkSync('android/app/src/main/res/values/strings.xml', (err) => {
    if (err) {
      console.log(err.message);
    }
  });
  fs.unlinkSync('android/app/build.gradle', (err) => {
    if (err) {
      console.log(err.message);
    }
  });
}
async function gen_java_module(name) {
  try {
    rimraf('android/app/src/main/java/com/', async function () {
      fs.mkdirSync('android/app/src/main/java/com/', 0744);
      var main_activity = `package com.${name};
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "${name}";
  }
}
           `;

      await write_file(
        `android/app/src/main/java/com/${name}`,
        'MainActivity',
        main_activity,
        'java',
        'generating main activity...',
      );

      var main_app = `package com.${name};
import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import com.facebook.react.bridge.JSIModulePackage; 
import com.swmansion.reanimated.ReanimatedJSIModulePackage; 

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
        @Override 
        protected JSIModulePackage getJSIModulePackage() {
          return new ReanimatedJSIModulePackage(); 
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.${name}.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
          `;
      await write_file(
        `android/app/src/main/java/com/${name}`,
        'MainApplication',
        main_app,
        'java',
        'generating main application...',
      );
    });
  } catch (err) {
    console.error(err.message);
  }
}
async function init(name) {
  await delete_file();
  var app_json = `{
  "name": "${name}",
  "displayName": "${name}"
}
    `;
  await write_file('./', 'app', app_json, 'json', 'generating display name...');
  await gen_java_module(name);
  var android_manifest = `<manifest xmlns:android="http://schemas.android.com/apk/res/android"
package="com.${name}">
  <uses-permission android:name="android.permission.INTERNET" />
  <application
    android:name=".MainApplication"
    android:label="@string/app_name"
    android:icon="@mipmap/ic_launcher"
    android:roundIcon="@mipmap/ic_launcher_round"
    android:allowBackup="false"
    android:usesCleartextTraffic="true"
    android:theme="@style/AppTheme">
    <activity
      android:name=".MainActivity"
      android:label="@string/app_name"
      android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
      android:launchMode="singleTask"
      android:screenOrientation="portrait"
      android:windowSoftInputMode="adjustPan">
      <intent-filter>
          <action android:name="android.intent.action.MAIN" />
          <category android:name="android.intent.category.LAUNCHER" />
      </intent-filter>
    </activity>
    <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
  </application>

</manifest>
`;

  await write_file(
    'android/app/src/main/',
    'AndroidManifest',
    android_manifest,
    'xml',
    'generating display AndroidManifest...',
  );
  var app_name = `<resources>
  <string name="app_name">${name}</string>
</resources>
`;
  await write_file(
    'android/app/src/main/res/values',
    'strings',
    app_name,
    'xml',
    'override display name...',
  );
  var gradle =
    `apply plugin: "com.android.application"
import com.android.build.OutputFile
import groovy.json.JsonSlurper

def getNpmVersion() {
    def inputFile = new File("../package.json")
    def packageJson = new JsonSlurper().parseText(inputFile.text)
    return packageJson["version"]
}
def getGitVersion() {
    def process = "git rev-list master --first-parent --count".execute()
    return process.text.toInteger()
}
project.ext.react = [
    enableHermes: true,  // clean and rebuild if changing
]
apply from: "../../node_modules/react-native/react.gradle"
def enableSeparateBuildPerCPUArchitecture = false
def enableProguardInReleaseBuilds = false
def jscFlavor = 'org.webkit:android-jsc:+'
def enableHermes = project.ext.react.get("enableHermes", false);
def userVer = getNpmVersion();
def googleVer = getGitVersion();

android {
    compileSdkVersion rootProject.ext.compileSdkVersion

    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }

    defaultConfig {
        applicationId "com.${name}"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode googleVer
        versionName userVer
    }
    splits {
        abi {
            reset()
            enable enableSeparateBuildPerCPUArchitecture
            universalApk false  // If true, also generate a universal APK
            include "armeabi-v7a", "x86", "arm64-v8a", "x86_64"
        }
    }
    signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
    }
    buildTypes {
        debug {
            signingConfig signingConfigs.debug
        }
        release {
            // Caution! In production, you need to generate your own keystore file.
            // see https://reactnative.dev/docs/signed-apk-android.
            signingConfig signingConfigs.debug
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }

    // applicationVariants are e.g. debug, release
    applicationVariants.all { variant ->
        variant.outputs.each { output ->
            // For each separate APK per architecture, set a unique version code as described here:
            // https://developer.android.com/studio/build/configure-apk-splits.html
            def versionCodes = ["armeabi-v7a": 1, "x86": 2, "arm64-v8a": 3, "x86_64": 4]
            def abi = output.getFilter(OutputFile.ABI)
            if (abi != null) {  // null for the universal-debug, universal-release variants
                output.versionCodeOverride =
                        versionCodes.get(abi) * 1048576 + defaultConfig.versionCode
            }

        }
    }
}

dependencies {
    implementation fileTree(dir: "libs", include: ["*.jar"])
    //noinspection GradleDynamicVersion
    implementation "com.facebook.react:react-native:+"  // From node_modules

    implementation "androidx.swiperefreshlayout:swiperefreshlayout:1.0.0"

    ` +
    'debugImplementation("com.facebook.flipper:flipper:${FLIPPER_VERSION}") {' +
    `
      exclude group:'com.facebook.fbjni'
    }

    ` +
    'debugImplementation("com.facebook.flipper:flipper-network-plugin:${FLIPPER_VERSION}") {' +
    `
        exclude group:'com.facebook.flipper'
        exclude group:'com.squareup.okhttp3', module:'okhttp'
    }

    ` +
    'debugImplementation("com.facebook.flipper:flipper-fresco-plugin:${FLIPPER_VERSION}") {' +
    `
        exclude group:'com.facebook.flipper'
    }

    if (enableHermes) {
        def hermesPath = "../../node_modules/hermes-engine/android/";
        debugImplementation files(hermesPath + "hermes-debug.aar")
        releaseImplementation files(hermesPath + "hermes-release.aar")
    } else {
        implementation jscFlavor
    }
}
task copyDownloadableDepsToLibs(type: Copy) {
    from configurations.compile
    into 'libs'
}
apply from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)
`;

  await write_file(
    'android/app/',
    'build',
    gradle,
    'gradle',
    'override gradle...',
  );
}
module.exports = {init};
