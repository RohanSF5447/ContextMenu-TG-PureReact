import{j as e}from"./index-CTAXdLKx.js";import{r as l}from"./index-D5jfS-9e.js";import{u as f,G as C,a as M,P as S,C as w,b as u}from"./useGridTheme-DwtHDbpG.js";import{u as P,a as R,b as v}from"./useContextMenu-CkEikGvQ.js";import{u as I,a as b}from"./useClipboard-a4M0YUfD.js";import"./client-Spw3EFno.js";import{u as y}from"./usePager-bZJQUBqI.js";import"./useToolbar-CwbE5079.js";const h=()=>{const a=[];let t=1;for(let r=0;r<4;r++){const d={id:t++,name:`Drive ${String.fromCharCode(65+r)}`,size:0,parentId:null};a.push(d);for(let n=0;n<3;n++){const s={id:t++,name:`Folder ${r+1}.${n+1}`,size:100+n*10,parentId:d.id};a.push(s);for(let i=0;i<3;i++)a.push({id:t++,name:`File ${r+1}.${n+1}.${i+1}`,size:1+i,parentId:s.id})}}return a},D=h(),o=()=>{f("material");const a=l.useRef(null),t=l.useRef(null);t.current===null&&(t.current=h());const[r,d]=l.useState(0),n={TreeDataModule:M,EditModule:b,ContextMenuModule:v,ClipboardModule:I,PagerModule:y,AutoFitModule:R,ResizeModule:P},s=()=>{d(i=>i+1)};return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h1",{children:"TreeGrid Context Menu - Parent ID Mode"}),e.jsxs("p",{children:["The data source is a flat array where every record references its parent by ",e.jsx("code",{children:"parentId"}),". Right-click behaviour is identical to the nested-children sample."]}),e.jsx(C,{ref:a,dataSource:D,isTreeMode:!0,treeColumnIndex:0,treeDataIdMapping:"id",treeDataParentIdField:"parentId",editSettings:{allowAdd:!0,allowEdit:!0,allowDelete:!0,mode:"Normal"},contextMenuSettings:{enabled:!0,items:["Edit","Delete","SelectRow","UnselectRow","ClearRowSelection","ClearSelection","Expand","Collapse","ExpandAll","CollapseAll","Cut","Copy","Paste","AutoFit","SortAscending","SortDescending","AutoFitAll","FirstPage","NextPage","LastPage"]},clipboardSettings:{enabled:!0,allowPaste:!0,allowCut:!0},pageSettings:{enabled:!0,pageSize:30,pageSizeMode:S.Root},sortSettings:{enabled:!0},selectionSettings:{enabled:!0,mode:"Multiple",type:"Row"},onDataChangeComplete:s,height:"520px",style:{marginTop:"12px"},modules:n,children:e.jsxs(w,{children:[e.jsx(u,{field:"id",headerText:"ID",isPrimaryKey:!0,width:80}),e.jsx(u,{field:"name",headerText:"Name",width:260}),e.jsx(u,{field:"size",headerText:"Size (KB)",width:110,textAlign:"Right"})]})}),e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsxs("h3",{children:["Source data (v",r,")"]}),e.jsx("pre",{style:{maxHeight:"220px",overflow:"auto",background:"#f6f8fa",padding:"12px"},children:JSON.stringify(t.current,null,2)})]})]})},V={title:"Grid/Tree ContextMenu/Parent ID",component:o};var p,c,m,g,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  useGridTheme('material');
  const gridRef = useRef<GridRef>(null);
  const datasourceRef = useRef<Folder[] | null>(null);
  if (datasourceRef.current === null) {
    datasourceRef.current = createSeedData();
  }
  const [previewVersion, setPreviewVersion] = useState<number>(0);
  const gridModules = {
    TreeDataModule,
    EditModule,
    ContextMenuModule,
    ClipboardModule,
    PagerModule,
    AutoFitModule,
    ResizeModule
  };
  const refreshPreview = (): void => {
    setPreviewVersion((version: number): number => version + 1);
  };
  return <div style={{
    padding: '20px'
  }}>\r
            <h1>TreeGrid Context Menu - Parent ID Mode</h1>\r
            <p>\r
                The data source is a flat array where every record references its\r
                parent by <code>parentId</code>. Right-click behaviour is identical\r
                to the nested-children sample.\r
            </p>\r
            <Grid ref={gridRef} dataSource={data} isTreeMode={true} treeColumnIndex={0} treeDataIdMapping='id' treeDataParentIdField='parentId' editSettings={{
      allowAdd: true,
      allowEdit: true,
      allowDelete: true,
      mode: 'Normal'
    }} contextMenuSettings={{
      enabled: true,
      items: ['Edit', 'Delete', 'SelectRow', 'UnselectRow', 'ClearRowSelection', 'ClearSelection', 'Expand', 'Collapse', 'ExpandAll', 'CollapseAll', 'Cut', 'Copy', 'Paste', 'AutoFit', 'SortAscending', 'SortDescending', 'AutoFitAll', 'FirstPage', 'NextPage', 'LastPage']
    }} clipboardSettings={{
      enabled: true,
      allowPaste: true,
      allowCut: true
    }} pageSettings={{
      enabled: true,
      pageSize: 30,
      pageSizeMode: PageSizeMode.Root
    }} sortSettings={{
      enabled: true
    }} selectionSettings={{
      enabled: true,
      mode: 'Multiple',
      type: 'Row'
    }} onDataChangeComplete={refreshPreview} height='520px' style={{
      marginTop: '12px'
    }} modules={gridModules}>\r
                <Columns>\r
                    <Column field='id' headerText='ID' isPrimaryKey={true} width={80} />\r
                    <Column field='name' headerText='Name' width={260} />\r
                    <Column field='size' headerText='Size (KB)' width={110} textAlign='Right' />\r
                </Columns>\r
            </Grid>\r
\r
            <div style={{
      marginTop: '16px'
    }}>\r
                <h3>Source data (v{previewVersion})</h3>\r
                <pre style={{
        maxHeight: '220px',
        overflow: 'auto',
        background: '#f6f8fa',
        padding: '12px'
      }}>\r
                    {JSON.stringify(datasourceRef.current, null, 2)}\r
                </pre>\r
            </div>\r
        </div>;
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"TreeGrid Context Menu - Parent ID Mode.\r\n\nSame command surface as the nested-children sample, driven by a flat\r\nself-referential data source (`treeDataIdMapping` + `treeDataParentIdField`).",...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.description}}};const $=["TreeGridContextMenuParentId"];export{o as TreeGridContextMenuParentId,$ as __namedExportsOrder,V as default};
