declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (e: 'event', v: string, data?: Record<string, string>) => void;
  }
}



export const sendDataToGA = async () => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycby7HDOvjzBylQcSurs87JUDafvTJvAqa5LAf_rJDC0bOCQXNqqo5az2fm18DYOAS-mvKw/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, variant: '3' }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};
