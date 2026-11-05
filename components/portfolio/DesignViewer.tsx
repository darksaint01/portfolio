"use client";
import { useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { DesignProject } from "@/data/portfolio";
import { ImageGallery } from "./ProjectViewer";

export default function DesignViewer({ project, onClose }: { project: DesignProject; onClose: () => void }) {
  const origin = useRef(typeof document === "undefined" ? null : document.activeElement as HTMLElement);
  return <Dialog open onOpenChange={open => { if (!open) onClose(); }}><DialogContent className="design-dialog" onCloseAutoFocus={event => { event.preventDefault(); origin.current?.focus(); }}><div className="design-viewer-head"><div className="eyebrow violet">{project.category}{project.year && ` / ${project.year}`}</div><DialogTitle>{project.title}</DialogTitle><DialogDescription>{project.description}</DialogDescription></div><div className="design-viewer-layout"><div><ImageGallery images={project.gallery} empty="Original artwork to be added." /></div><div className="design-case-details">{project.objective && <section><h3>Project objective</h3><p>{project.objective}</p></section>}{project.creativeDirection && <section><h3>Creative direction</h3><p>{project.creativeDirection}</p></section>}{project.process && <section><h3>Design process</h3><p>{project.process}</p></section>}{project.tools.length > 0 && <section><h3>Tools</h3><div className="tags">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div></section>}{project.typography?.length ? <section><h3>Typography</h3><p>{project.typography.join(", ")}</p></section> : null}{project.palette?.length ? <section><h3>Color palette</h3><div className="design-palette">{project.palette.map(color => <span key={color}><i style={{background: color}} />{color}</span>)}</div></section> : null}{project.result && <section><h3>Final result</h3><p>{project.result}</p></section>}</div></div></DialogContent></Dialog>;
}
