"use client";
import { useState } from "react";
import Image from "next/image";
import {
  PhoneMissed, Zap, FileText, CalendarCheck, Heart, Star, Headset, MessageCircle, LifeBuoy, Package,
  UserPlus, FileCheck, Wrench, Boxes, Search, ScrollText, ShoppingCart, Wallet, TrendingUp, Compass,
} from "lucide-react";

const ICONS = { PhoneMissed, Zap, FileText, CalendarCheck, Heart, Star, Headset, MessageCircle, LifeBuoy, Package, UserPlus, FileCheck, Wrench, Boxes, Search, ScrollText, ShoppingCart, Wallet, TrendingUp, Compass };

export function AgentIcon({ name, size = 18 }) {
  const I = ICONS[name] || Zap;
  return <I size={size} aria-hidden strokeWidth={1.8} />;
}

/**
 * Image slot. Always paints an elegant CSS placeholder first, then lays the real file on top.
 * If the file is missing (404) the placeholder simply stays. The app never needs the image to exist.
 * Remount with a new `key` per image so only the selected image is requested.
 */
export function ImageSlot({ src, alt, label, icon, number, className = "", sizes, priority = false }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`wf-art ${className}`} data-missing={failed ? "1" : "0"}>
      <div className="wf-art-ph" aria-hidden>
        <i /><i /><i />
        {icon && <span className="wf-art-icon"><AgentIcon name={icon} size={30} /></span>}
        {number != null && <span className="wf-art-no">{String(number).padStart(2, "0")}</span>}
        {label && <span className="wf-art-label">{label}</span>}
      </div>
      {src && !failed && (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} loading={priority ? undefined : "lazy"} className="wf-art-img" onError={() => setFailed(true)} />
      )}
    </div>
  );
}
