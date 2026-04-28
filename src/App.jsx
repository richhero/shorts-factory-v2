import React, { useState, useMemo } from 'react';
import './styles/Layout.css';
import './styles/Editor.css';
import './styles/Modal.css';
import { 
  Scissors, 
  Languages, 
  Zap, 
  Settings, 
  Search, 
  PlusCircle, 
  FileText, 
  FastForward, 
  VolumeX,
  Video,
  Monitor,
  Play,
  SkipBack,
  SkipForward,
  Type,
  Maximize2,
  Upload,
  Download,
  RotateCcw,
  X,
  FileCode,
  Layers,
  ArrowRightLeft,
  CheckCircle2
} from 'lucide-react';

/* --- 최종 통합 내여보내기 모달 (다크 모드 최적화) --- */
const ExportModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [activeTab, setActiveTab] = useState('srt');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="export-modal-content dark-theme" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">내보내기</h2>
          <p className="modal-description">영상 또는 자막을 다운로드합니다</p>
        </div>
        <div className="modal-body">
          {/* 섹션 1: 렌더링 영상 */}
          <div className="modal-section">
            <div className="section-header"><Video size={16} /> <label>렌더링 영상</label> <span className="badge">MP4</span></div>
            <div className="item-card">
              <div className="item-info">
                <span className="badge-outline">자막 번인</span>
                <div className="item-text">
                  <p className="filename">상대를 내 편으로 만드는 심리 기술... #shorts_자막번인.mp4</p>
                  <p className="subtext">현재 프리뷰 기준으로 MP4를 만듭니다.</p>
                </div>
                <button className="download-icon-btn"><Download size={14} /> 내보내기</button>
              </div>
            </div>
          </div>
          
          <hr className="divider" />

          {/* 섹션 2: 프로 에디터 연동 */}
          <div className="modal-section">
            <div className="section-header"><Layers size={16} /> <label>✨ 프로 에디터 연동 (Workflow Export)</label></div>
            <div className="export-workflow-grid">
              <button className="workflow-btn premiere"><FileCode size={14} /> <span>Adobe Premiere Pro (.xml)</span></button>
              <button className="workflow-btn capcut"><Zap size={14} /> <span>CapCut PC (.json)</span></button>
              <button className="workflow-btn vrew"><Languages size={14} /> <span>Vrew (.srt)</span></button>
            </div>
          </div>

          <hr className="divider" />

          {/* 섹션 3: 자막 / 대본 */}
          <div className="modal-section">
            <div className="section-header"><FileText size={16} /> <label>자막 / 대본</label></div>
            <div className="tab-pill-group">
               <button className={activeTab === 'srt' ? 'active' : ''} onClick={() => setActiveTab('srt')}>자막 <span className="badge-small">SRT</span></button>
               <button className={activeTab === 'txt' ? 'active' : ''} onClick={() => setActiveTab('txt')}>대본 <span className="badge-small">TXT</span></button>
            </div>
            <div className="lang-list">
               <div className="lang-item">
                  <span className="flag-icon">🇰🇷</span>
                  <div className="item-text"><p className="filename">...#shorts_ko_자막.srt</p><p className="subtext">한국어 (원본)</p></div>
                  <button className="download-icon-btn"><Download size={12} /></button>
               </div>
               <div className="lang-item">
                  <span className="flag-icon">🇺🇸</span>
                  <div className="item-text"><p className="filename">...#shorts_en_자막.srt</p><p className="subtext">English</p></div>
                  <button className="download-icon-btn"><Download size={12} /></button>
               </div>
            </div>
          </div>
        </div>
        <div className="modal-footer"><button className="all-download-btn"><Download size={16} /> 모두 다운로드</button></div>
        <button className="modal-close-btn" onClick={onClose}><X size={18} /></button>
      </div>
    </div>
  );
};

/* --- 지침서 해석 검증 맵 (시간 매핑 시각화 강화) --- */
const TimelineAnalysisMap = ({ instruction }) => {
  const analysisData = useMemo(() => {
    if (!instruction) return [];

    // 정규표현식: '13초 -> 0초', '00:13 -> 00:00', '13 -> 0' 등의 패턴 추출
    const mappingRegex = /(\d{1,2}:?\d{0,2})\s*(?:초)?\s*->\s*(\d{1,2}:?\d{0,2})\s*(?:초)?/g;
    const matches = [...instruction.matchAll(mappingRegex)];

    return matches.map((match, index) => ({
      seq: index + 1,
      source: match[1],
      target: match[2],
      duration: '분석 중...',
      action: '시간 매핑 적용',
      note: `지침서의 ${match[1]} 지점을 ${match[2]}로 이동 배치했습니다.`
    }));
  }, [instruction]);

  return (
    <div className="analysis-map-container">
      <div className="section-header-mini"><CheckCircle2 size={14} color="var(--accent-blue)" /> <span>지침서 해석 검증 (Timeline Mapping)</span></div>
      {analysisData.length > 0 ? (
        <>
          <table className="analysis-table">
            <thead>
              <tr>
                <th>순서</th>
                <th>결과 시점 (Target)</th>
                <th>원본 소스 (Source)</th>
                <th>액션 / 의도</th>
              </tr>
            </thead>
            <tbody>
              {analysisData.map(item => (
                <tr key={item.seq}>
                  <td style={{ opacity: 0.5 }}>{item.seq}</td>
                  <td className="highlight-blue">
                    <div className="time-mapping">
                      <ArrowRightLeft size={10} style={{ marginRight: '4px' }} />
                      {item.target}
                    </div>
                  </td>
                  <td className="highlight-purple">{item.source} <span className="duration-tag">{item.duration}</span></td>
                  <td>
                    <div className="action-text">{item.action}</div>
                    <div className="note-text">{item.note}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mapping-status">
            <Zap size={10} color="var(--accent-purple)" />
            <span>AI가 입력된 지침에서 {analysisData.length}개의 시간 매핑 포인트를 추출하여 배치했습니다.</span>
          </div>
        </>
      ) : (
        <div className="empty-analysis-state" style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px', border: '1px dashed var(--border-color)', borderRadius: '8px', marginTop: '10px' }}>
          지침서에 &apos;13초 → 0초&apos;와 같은 시간 매핑 정보를 입력하면{' '}<br />AI가 분석하여 이곳에 표시합니다.
        </div>
      )}
    </div>
  );
};

const VideoEditor = ({ setIsExportModalOpen }) => {
  const [inputMode, setInputMode] = useState('json');
  const [instruction, setInstruction] = useState('');

  return (
    <div className="editor-container">
      <div className="editor-top-row">
        <div className="dual-preview-container">
          <div className="preview-box source">
            <div className="preview-label">ORIGINAL SOURCE</div>
            <div className="video-canvas mini">
               <div className="upload-overlay"><PlusCircle size={32} /><p>원본 영상을 업로드하세요</p></div>
            </div>
          </div>
          <div className="preview-box result">
            <div className="preview-label">AI RENDERED RESULT</div>
            <div className="video-canvas mini"><Play size={32} color="white" /></div>
          </div>
          <div className="player-controls">
            <SkipBack size={18} /><Play size={20} /><SkipForward size={18} />
            <div className="time-display">00:00:00 / 00:00:58</div>
          </div>
        </div>

        <div className="tool-panel">
          <div className="panel-section">
            <h3>📥 파일 및 지침서 업로드</h3>
            <button className="sub-tool-btn primary full mb-3"><Video size={14} /> 원본 동영상 업로드</button>
            <div className="input-tab-group">
              <button className={inputMode === 'json' ? 'active' : ''} onClick={() => setInputMode('json')}>JSON</button>
              <button className={inputMode === 'direct' ? 'active' : ''} onClick={() => setInputMode('direct')}>직접 입력</button>
            </div>
            <textarea 
              className="direct-textarea" 
              placeholder="지침을 입력하세요... (예: 13초 -> 0초로 이동)"
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
            ></textarea>
          </div>

          <div className="panel-section">
             <TimelineAnalysisMap instruction={instruction} />
          </div>

          <div className="panel-section">
            <h3>⚡ AI 퀵 도구</h3>
            <div className="tool-grid">
              <button className="tool-action-btn"><Type size={14} /> <span>자막 생성</span></button>
              <button className="tool-action-btn"><VolumeX size={14} /> <span>무음 제거</span></button>
              <button className="tool-action-btn"><FastForward size={14} /> <span>배속 최적화</span></button>
              <button className="tool-action-btn"><Languages size={14} /> <span>번역/수출</span></button>
            </div>
          </div>

          <button className="main-execute-btn" onClick={() => setIsExportModalOpen(true)}>검증 완료 및 최종 렌더링 시작</button>
        </div>
      </div>

      <div className="timeline-section">
        <div className="timeline-canvas">
          <div className="timeline-track subtitle-track"><div className="track-label">Subtitles</div><div className="track-content"><div className="clip sub-clip" style={{ width: '20%', left: '0%' }}>자막 번인</div></div></div>
          <div className="timeline-track video-track"><div className="track-label">Video V1</div><div className="track-content"><div className="clip video-clip" style={{ width: '40%', left: '0%' }}>Source: 13s ~ 18s</div></div></div>
          <div className="playhead"></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('editor');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="workspace">
        <header className="workspace-header">
          <div className="breadcrumb">UCE v15.6 / AI 영상편집</div>
          <div className="header-actions">
            <button className="btn-export" onClick={() => setIsExportModalOpen(true)}><Download size={14} /> 내보내기</button>
            <button className="btn-new-project"><RotateCcw size={14} /> 새 프로젝트</button>
          </div>
        </header>
        {activeTab === 'editor' ? <VideoEditor setIsExportModalOpen={setIsExportModalOpen} /> : <div className="workspace-content"><h2>준비 중...</h2></div>}
        <ExportModal isOpen={isExportModalOpen} onClose={() => setIsExportModalOpen(false)} />
      </main>
    </div>
  );
}

const Sidebar = ({ activeTab, setActiveTab }) => {
  const categories = [
    { id: 'discovery', label: '디스커버리', icon: <Search size={16} /> },
    { id: 'editor', label: 'AI 영상편집', icon: <Scissors size={16} /> },
    { id: 'automation', label: '자동화', icon: <Zap size={16} /> },
    { id: 'education', label: '교육', icon: <Monitor size={16} /> },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar-header"><div className="logo-icon">U</div><div className="logo-text">UCE v15.6</div></div>
      <div className="category-grid">{categories.map(cat => (<div key={cat.id} className={`category-tab ${activeTab === cat.id ? 'active' : ''}`} onClick={() => setActiveTab(cat.id)}>{cat.icon}<span>{cat.label}</span></div>))}</div>
      <div className="menu-list"><div className="menu-section-title">메인 메뉴</div><div className="menu-item active"><Video size={14} /><span>워크스페이스</span></div></div>
    </div>
  );
};

export default App;
