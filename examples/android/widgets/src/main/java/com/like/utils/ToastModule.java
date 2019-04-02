package com.like.utils;

import android.util.Log;
import android.view.Gravity;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

/***
 * Toast弹窗显示
 */
public class ToastModule extends ReactContextBaseJavaModule {

    private Toast mToast;

    private Object object;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    private static final String LOCATION_TOP_KEY = "TOP";
    private static final String LOCATION_CENTER_KEY = "CENTER";
    private static final String LOCATION_BOTTOM_KEY = "BOTTOM";

    public ToastModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "ToastModule";
    }

    /**
     * 添加一些常量以供使用
     *
     * @return
     */
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);

        constants.put(LOCATION_TOP_KEY, Gravity.TOP | Gravity.CENTER_HORIZONTAL);
        constants.put(LOCATION_CENTER_KEY, Gravity.CENTER);
        constants.put(LOCATION_BOTTOM_KEY, Gravity.BOTTOM | Gravity.CENTER_HORIZONTAL);
        return constants;
    }

    /**
     * 初始化弹窗
     *
     * @param message  弹窗的信息
     * @param duration 时间
     * @param location 位置
     */
    private void initToast(String message, int duration, int location) {
        Toast toast = Toast.makeText(getReactApplicationContext(), message, duration);
        toast.setGravity(location, 0, 0);
        toast.show();
    }

    private void initToast(String message, int location) {
        mToast = Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT);
        mToast.setGravity(location,0,0);
        try {
            Field field = mToast.getClass().getDeclaredField("mTN");
            field.setAccessible(true);
            object = field.get(mToast);
            Method method = object.getClass().getDeclaredMethod("show",null);
            method.invoke(object,null);
        }catch (Exception e){
            Log.d("ToastModule",e.toString());
        }
    }

    /**
     * 在底部长时间显示弹窗
     *
     * @param message 需要显示的信息
     */
    @ReactMethod
    public void show(String message) {
        initToast(message,Gravity.BOTTOM | Gravity.CENTER_HORIZONTAL);
    }

    /**
     * 在指定位置长时间显示
     *
     * @param message  显示内容
     * @param location 显示位置
     */
    @ReactMethod
    public void show(String message, int location) {
        initToast(message,location);
    }

    /**
     * 关闭弹窗
     */
    @ReactMethod
    public void hide(){
        if (object == null){
            return;
        }
        try {
            Method method = object.getClass().getDeclaredMethod("hide",null);
            method.invoke(object,null);
        }catch (Exception e){
            Log.d("ToastModule",e.toString());
        }
    }

    /**
     * 显示在屏幕中间2s时间
     *
     * @param message
     */
    @ReactMethod
    public void showCenter(String message) {
        initToast(message, Toast.LENGTH_SHORT, Gravity.CENTER);
    }

    /**
     * 显示在屏幕中间指定时间
     *
     * @param message
     * @param duration
     */
    @ReactMethod
    public void showCenter(String message, int duration) {
        initToast(message, duration, Gravity.CENTER);
    }

    /**
     * 在顶部显示2s弹窗
     *
     * @param message
     */
    @ReactMethod
    public void showTop(String message) {
        initToast(message, Toast.LENGTH_SHORT, Gravity.TOP | Gravity.CENTER_HORIZONTAL);
    }

    /**
     * 在顶部显示指定时间弹窗
     *
     * @param message
     * @param duration
     */
    @ReactMethod
    public void showTop(String message, int duration) {
        initToast(message, duration, Gravity.TOP | Gravity.CENTER_HORIZONTAL);
    }

    /**
     * 在底部显示2s弹窗
     *
     * @param message
     */
    @ReactMethod
    public void showBottom(String message) {
        initToast(message, Toast.LENGTH_SHORT, Gravity.BOTTOM | Gravity.CENTER_HORIZONTAL);
    }

    /**
     * 在底部显示指定时间弹窗
     *
     * @param message
     * @param duration
     */
    @ReactMethod
    public void showBottom(String message, int duration) {
        initToast(message, duration, Gravity.BOTTOM | Gravity.CENTER_HORIZONTAL);
    }

}
