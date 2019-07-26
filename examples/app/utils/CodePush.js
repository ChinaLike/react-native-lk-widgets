import codePush from 'react-native-code-push'

function codePushInit() {
  return codePush(
    {
      checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
      installMode: codePush.InstallMode.ON_NEXT_RESUME
      // updateDialog: {
      //   appendReleaseDescription: true,

      //   descriptionPrefix: '\n\n更新内容:\n',
      //   mandatoryContinueButtonLabel: '继续',
      //   mandatoryUpdateMessage: '找到一个更新，需要立即安装',
      //   optionalIgnoreButtonLabel: '忽略',
      //   optionalInstallButtonLabel: '安装',
      //   optionalUpdateMessage: '找到一个更新，现在安装？',
      //   title: '有一个更新'
      // }
    },
    status => {
      alert(111)
      switch (status) {
        case codePush.SyncStatus.DOWNLOADING_PACKAGE:
          // Show "downloading" modal

          break
        case codePush.SyncStatus.INSTALLING_UPDATE:
          // Hide "downloading" modal

          break
        case codePush.SyncStatus.UPDATE_INSTALLED:
          break
      }
    },
    ({ receivedBytes, totalBytes }) => {
      /* Update download modal progress */
    }
  )
}

function codePushSync() {
  codePush.sync({
    updateDialog: false,
    installMode: codePush.InstallMode.ON_NEXT_RESUME
  })
}

function hotupdate() {
  //访问慢,不稳定
  // codePush.checkForUpdate('deployment-key-here').then(update => {
  //   if (update) {
  codePush.sync(
    {
      // deploymentKey: 'deployment-key-here',
      updateDialog: {
        mandatoryContinueButtonLabel: '立即更新',
        optionalIgnoreButtonLabel: '稍后',
        optionalInstallButtonLabel: '后台更新',
        optionalUpdateMessage: '有新版本了，是否更新？',
        title: '更新提示'
      },
      installMode: codePush.InstallMode.IMMEDIATE
    },
    status => {
      switch (status) {
        case codePush.SyncStatus.CHECKING_FOR_UPDATE:
          //alert(codePush.SyncStatus.CHECKING_FOR_UPDATE);
          break
        // case codePush.SyncStatus.AWAITING_USER_ACTION:
        //     alert('codePush.SyncStatus.AWAITING_USER_ACTION');
        //     break;
        case codePush.SyncStatus.DOWNLOADING_PACKAGE:
          //应用更新中，请稍后...
          break
        case codePush.SyncStatus.INSTALLING_UPDATE:
          codePush.allowRestart()
          break
        case codePush.SyncStatus.UP_TO_DATE:
          //当前已是最新版本
          break
        // case codePush.SyncStatus.UPDATE_IGNORED:
        //     alert('codePush.SyncStatus.UPDATE_IGNORED');
        //     break;
        // case codePush.SyncStatus.UPDATE_INSTALLED:
        //     alert('codePush.SyncStatus.UPDATE_INSTALLED');
        //     break;
        // case codePush.SyncStatus.SYNC_IN_PROGRESS:
        //     alert('codePush.SyncStatus.SYNC_IN_PROGRESS');
        //     break;
        // case codePush.SyncStatus.UNKNOWN_ERROR:
        //     alert('codePush.SyncStatus.UNKNOWN_ERROR');
        //break;
      }
    }
  )
  // }
  // })
}

export default {
  codePushInit,
  codePushSync,
  hotupdate
}
