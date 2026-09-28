"use client";

import Script from "next/script";
import { useEffect } from "react";
import { gaEvent } from "@/lib/analytics";
import { site } from "@/lib/site";

const SCROLL_MARKS = [25, 50, 75, 90];

/** TikTok Pixel (PageView + ViewContent), GA4 tùy chọn, và scroll depth. */
export function Analytics() {
  useEffect(() => {
    const fired = new Set<number>();
    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = (window.scrollY / max) * 100;
      for (const mark of SCROLL_MARKS) {
        if (pct >= mark && !fired.has(mark)) {
          fired.add(mark);
          gaEvent(`scroll_${mark}`, { percent: mark });
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {site.tiktokPixelId && (
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`!function (w, d, t) {
w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
ttq.load(${JSON.stringify(site.tiktokPixelId)});
ttq.page();
ttq.track("ViewContent",{content_id:"pancharm-battu-consult",content_type:"product",content_name:"landing_battu"});
}(window, document, "ttq");`}
        </Script>
      )}
      {site.ga4Id && (
        <>
          <Script
            id="ga4-src"
            src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config',${JSON.stringify(site.ga4Id)});`}
          </Script>
        </>
      )}
    </>
  );
}
