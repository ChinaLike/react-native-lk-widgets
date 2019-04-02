package com.like;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import javax.annotation.Nonnull;

public class RCTLkWidgetsModule extends ReactContextBaseJavaModule {

    public RCTLkWidgetsModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "RCTLkWidgetsModule";
    }
}
