'use client';

type AwardItem = {
  name: string;
  label?: string;
};

type Props = {
  items: AwardItem[];
  variant?: 'grid' | 'masonry';
};

export default function AwardGallery({ items, variant = 'grid' }: Props) {
  if (variant === 'masonry') {
    return (
      <div
        style={{
          columnCount: 4,
          columnGap: 20,
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              breakInside: 'avoid',
              marginBottom: 20,
              position: 'relative',
              borderRadius: 16,
              overflow: 'hidden',
            }}
          >
            <img
              src={`/img/awards/${item.name}`}
              alt={item.label}
              style={{
                width: '100%',
                display: 'block',
                transition: 'transform .4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.06)';
                const overlay = e.currentTarget.nextSibling as HTMLElement;
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                const overlay = e.currentTarget.nextSibling as HTMLElement;
                if (overlay) overlay.style.opacity = '0';
              }}
            />

            {item.label && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(0,0,0,.65), transparent)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: 14,
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 600,
                  opacity: 0,
                  transition: 'opacity .3s ease',
                  pointerEvents: 'none',
                }}
              >
                {item.label}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  /* ===== fallback แบบ grid ธรรมดา ===== */
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 16,
      }}
    >
      {items.map((item, i) => (
        <img
          key={i}
          src={`/img/awards/${item.name}`}
          alt={item.label}
          style={{
            width: '100%',
            borderRadius: 12,
          }}
        />
      ))}
    </div>
  );
}
