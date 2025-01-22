import React from 'react';
import { MdEditor, EditorProps } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export interface MdEditorProps extends EditorProps {
}

/**
 * @author xu.pengfei
 * @date 2025/1/22 11:11
 */
export default function FaMdEditor({ ...props }: MdEditorProps) {
  return (
    <MdEditor {...props} />
  )
}
