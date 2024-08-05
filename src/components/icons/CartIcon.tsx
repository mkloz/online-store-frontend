export function CartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 22C17.8978 22 18.2794 21.842 18.5607 21.5607C18.842 21.2794 19 20.8978 19 20.5C19 20.1022 18.842 19.7206 18.5607 19.4393C18.2794 19.158 17.8978 19 17.5 19C17.1022 19 16.7206 19.158 16.4393 19.4393C16.158 19.7206 16 20.1022 16 20.5C16 20.8978 16.158 21.2794 16.4393 21.5607C16.7206 21.842 17.1022 22 17.5 22ZM7.5 22C7.89782 22 8.27936 21.842 8.56066 21.5607C8.84196 21.2794 9 20.8978 9 20.5C9 20.1022 8.84196 19.7206 8.56066 19.4393C8.27936 19.158 7.89782 19 7.5 19C7.10218 19 6.72064 19.158 6.43934 19.4393C6.15804 19.7206 6 20.1022 6 20.5C6 20.8978 6.15804 21.2794 6.43934 21.5607C6.72064 21.842 7.10218 22 7.5 22Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 4H2L4 15M19 4L17 15H4M19 4C19.167 3.333 20 2 22 2M4 15H18.77C20.554 15 21.5 15.781 21.5 17C21.5 18.219 20.554 19 18.77 19H4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CartIcon;
