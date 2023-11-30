# Console Commands

## Run the emulator in windows

1. Search for the location of the emulator

    ```ps2
    Get-ChildItem -Path C:\ -Filter emulator.exe -Recurse -ErrorAction SilentlyContinue

    ```

1. Add the emulator to the path
1. find the devices created

    ```ps2
    emulator -list-avds
    
    ```
1. Run the emulator

    ```ps2
    emulator -avd Pixel_2_API_29
    
    ```
1. Run expo in other terminal

    ```ps2
    npx expo start
    
    ```
