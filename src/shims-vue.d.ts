declare module '*.vue' {
  import Vue from "vue"

  export default Vue
}

declare module '*.scss' {
  const styles: Record<string, string>
  export default styles
}

  const svg: SVGSprite
  export default svg
}


declare module 'vue/types/vue' {
  interface VueConstructor {
    readonly _isDestroyed: boolean;
  }
}

declare const process: {
  env: {
    BASE_URL: string;
    NODE_ENV: 'staging' | 'production' | 'development';
    VUE_APP_TITLE: string;
  };
}
